'use client';

import { getCookie, setCookie } from './cookies';

class SoundController {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private unlocked: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const cookieMuted = getCookie('flashfire_sound_muted');
      if (cookieMuted !== null) {
        this.muted = cookieMuted === 'true';
      } else {
        const saved = localStorage.getItem('flashfire_sound_muted');
        if (saved !== null) {
          this.muted = JSON.parse(saved);
        }
      }

      // Auto-unlock AudioContext on first user interaction (pointerdown, keydown, click)
      const unlock = () => {
        this.unlockAudio();
      };
      window.addEventListener('pointerdown', unlock, { passive: true, once: true });
      window.addEventListener('keydown', unlock, { passive: true, once: true });
      window.addEventListener('click', unlock, { passive: true, once: true });
    }
  }

  private unlockAudio() {
    if (this.unlocked) return;
    const ctx = this.getContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().then(() => {
        this.unlocked = true;
      }).catch(() => {});
    } else if (ctx) {
      this.unlocked = true;
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('flashfire_sound_muted', JSON.stringify(this.muted));
      setCookie('flashfire_sound_muted', String(this.muted), 365);
    }
    if (!this.muted) {
      // Acoustic confirmation when unmuting
      setTimeout(() => this.playRate(3), 50);
    }
    return this.muted;
  }

  /**
   * Tactile soft pop on button click / tab switch / selection
   */
  public playSelect() {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.06);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  /**
   * Crisp, airy whoosh on card flip
   */
  public playFlip() {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.08);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.11);
    } catch {}
  }

  /**
   * Cheerful, uplifting two-tone bright chime for correct answer
   */
  public playCorrect() {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Note 1: E5 (659Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.29);

      // Note 2: B5 (987.77Hz) slightly delayed for a bright chord
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(987.77, now + 0.05);
      gain2.gain.setValueAtTime(0.18, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.36);
    } catch {}
  }

  /**
   * Warm wooden hollow thud on wrong answer - audible on all laptop & phone speakers
   */
  public playIncorrect() {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Pulse 1: 320Hz downward pitch
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(220, now + 0.1);
      gain1.gain.setValueAtTime(0.16, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Pulse 2: 240Hz soft wooden tap slightly offset
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(240, now + 0.07);
      osc2.frequency.exponentialRampToValueAtTime(170, now + 0.18);
      gain2.gain.setValueAtTime(0.16, now + 0.07);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.07);
      osc2.stop(now + 0.23);
    } catch {}
  }

  /**
   * Rating feedback melodic chime (Forgot / Hard / Good / Easy)
   */
  public playRate(rating: 1 | 2 | 3 | 4) {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const freqs = { 1: 260, 2: 349.23, 3: 440, 4: 587.33 };
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = rating === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freqs[rating], now);
      if (rating === 1) {
        osc.frequency.exponentialRampToValueAtTime(190, now + 0.1);
      }

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {}
  }

  /**
   * Playful sparkly chime for completing a quiz or session
   */
  public playSuccess() {
    if (this.muted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.16, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.32);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.34);
      });
    } catch {}
  }

  public playComplete() {
    this.playSuccess();
  }

  public playError() {
    this.playIncorrect();
  }
}

export const sounds = new SoundController();
