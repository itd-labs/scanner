(function () {
  "use strict";

  class clazz {
    compressed = new Uint16Array(200);
    compressedLength = 0;
    currentPeak = 0;
    currentCount = 0;
    compressionFactor = 1;
    feed(arg) {
      if (arg instanceof Float32Array) {
        for (let local = 0; local < arg.length; local++) {
          const local = arg[local];
          const local_2 = local < -1 ? -1 : local > 1 ? 1 : local;
          const local_3 =
            local_2 < 0
              ? Math.max(-32768, Math.round(local_2 * 32768))
              : Math.round(local_2 * 32767);
          this.ingest(local_3);
        }
      } else {
        for (let local = 0; local < arg.length; local++) {
          this.ingest(arg[local]);
        }
      }
    }
    normalisedDisplayLevel(arg) {
      const local = Math.max(0, Math.min(1, arg)) * 32767;
      if (this.compressedLength === 0) {
        return Math.min(local / 2500, 1);
      }
      let local_2 = 0;
      for (let local = 0; local < this.compressedLength; local++) {
        local_2 += this.compressed[local];
      }
      let local_3 = (local_2 / this.compressedLength) * 1.8;
      if (local_3 < 2500) {
        local_3 = 2500;
      }
      return Math.min(local, local_3) / local_3;
    }
    finalize() {
      const local = new Uint16Array(100);
      if (this.compressedLength > 0) {
        for (let local = 0; local < this.compressedLength; local++) {
          const local = Math.floor((local * 100) / this.compressedLength);
          const local_2 = this.compressed[local];
          if (local_2 > local[local]) {
            local[local] = local_2;
          }
        }
      }
      let local_2 = 0;
      for (let local = 0; local < 100; local++) {
        local_2 += local[local];
      }
      let local_3 = Math.floor((local_2 * 1.8) / 100);
      if (local_3 < 2500) {
        local_3 = 2500;
      }
      const local_4 = new Uint8Array(100);
      for (let local = 0; local < 100; local++) {
        const local = local[local];
        const local_2 = Math.min(local, local_3);
        const local_3 = Math.floor((local_2 * 31) / local_3);
        local_4[local] = Math.min(local_3, 31);
      }
      return local_4;
    }
    reset() {
      this.compressed.fill(0);
      this.compressedLength = 0;
      this.currentPeak = 0;
      this.currentCount = 0;
      this.compressionFactor = 1;
    }
    ingest(arg) {
      let local = arg;
      if (local < 0) {
        local = local === -32768 ? 32767 : -local;
      }
      const local_2 = local & 65535;
      if (local_2 > this.currentPeak) {
        this.currentPeak = local_2;
      }
      this.currentCount++;
      if (this.currentCount === this.compressionFactor) {
        this.pushPeak(this.currentPeak);
        this.currentPeak = 0;
        this.currentCount = 0;
      }
    }
    pushPeak(arg) {
      this.compressed[this.compressedLength] = arg;
      this.compressedLength++;
      if (this.compressedLength === 200) {
        for (let local = 0; local < 100; local++) {
          const local = this.compressed[2 * local];
          const local_2 = this.compressed[2 * local + 1];
          this.compressed[local] = local > local_2 ? local : local_2;
        }
        for (let local = 100; local < 200; local++) {
          this.compressed[local] = 0;
        }
        this.compressedLength = 100;
        this.compressionFactor *= 2;
      }
    }
  }
  if (typeof registerProcessor === "function") {
    class clazz extends AudioWorkletProcessor {
      builder = new clazz();
      frozen = false;
      frames = 0;
      peak = 0;
      constructor() {
        super();
        this.port.onmessage = (arg) => {
          if (arg.data?.type === "reset") {
            this.builder.reset();
            this.frozen = false;
            this.frames = 0;
            this.peak = 0;
          } else if (arg.data?.type === "snapshot") {
            this.frozen = true;
            const local = this.builder.finalize();
            this.port.postMessage(
              {
                type: "snapshot",
                samples: local,
              },
              [local.buffer],
            );
          }
        };
      }
      process(arg) {
        const local = arg[0]?.[0];
        if (!local || this.frozen) {
          return true;
        }
        this.builder.feed(local);
        for (let local = 0; local < local.length; local++) {
          this.peak = Math.max(this.peak, Math.abs(local[local]));
        }
        this.frames += local.length;
        if (this.frames >= sampleRate / 20) {
          this.port.postMessage({
            type: "level",
            value: this.builder.normalisedDisplayLevel(this.peak),
          });
          this.frames = 0;
          this.peak = 0;
        }
        return true;
      }
    }
    registerProcessor("itd-voice-levels", clazz);
  }
})();
