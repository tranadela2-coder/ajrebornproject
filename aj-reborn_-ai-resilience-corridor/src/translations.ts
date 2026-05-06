export type Language = 'en' | 'jp';

export const translations = {
  en: {
    nav: {
      mechanism: "The Mechanism",
      showcase: "Phoenix Label",
      synergy: "Synergy Map",
      leadership: "Leadership",
    },
    hero: {
      headline: "AJ-REBORN: Re-engineering the Pulse of the Mekong through Digital Trust.",
      cta: "Explore the Corridor",
    },
    mechanism: {
      title: "The Mechanism",
      phase1: {
        title: "Digital DNA Vault",
        desc: "Using NLP to digitize An Giang's indigenous formulas and intellectual property, securing cultural heritage in a high-tech immutable ledger.",
      },
      phase2: {
        title: "Generative Adaptive Pivot",
        desc: "AI-driven reconstruction blueprints and generative branding triggered by real-time salinity sensors, allowing instant production shifts.",
      },
      phase3: {
        title: "Blockchain Trust Bridge",
        desc: "MRL (Maximum Residue Limit) verification ensuring full transparency and compliance for the demanding Japanese market.",
      },
    },
    showcase: {
      title: "The Phoenix Label",
      subtitle: "Symbol of Rebirth",
      hoverQr: "Scan QR for Survival Timeline",
      timeline: {
        pre: "Pre-disaster: Traditional Production",
        pivot: "AI Pivot: Disaster Response & Adaptation",
        ready: "Japan-ready: MRL Certification & Export",
      }
    },
    synergy: {
      title: "Synergy & Data Corridor",
      mapDesc: "A digital bridge connecting the agricultural heart of An Giang with the industrial precision of Japan.",
      stats: [
        { label: "SMEs Digitally Mapped", value: "12,000+" },
        { label: "Quality Pass Rate", value: "98%" },
        { label: "Avg. Pivot Time", value: "3 Weeks" },
      ]
    },
    leadership: {
      quote: "We don't just fix what's broken; we re-engineer what is possible through AI and cross-border trust.",
      founder: "Trần Đặng Thanh Phương",
      role: "Founder & Google Student Ambassador",
    }
  },
  jp: {
    nav: {
      mechanism: "メカニズム",
      showcase: "フェニックスラベル",
      synergy: "シナジーマップ",
      leadership: "リーダーシップ",
    },
    hero: {
      headline: "AJ-REBORN: デジタルトラストによるメコンの鼓動の再構築。",
      cta: "回廊を探索する",
    },
    mechanism: {
      title: "メカニズム",
      phase1: {
        title: "デジタルDNAボルト",
        desc: "自然言語処理を使用してアンザンの伝統的な製法と知的財産をデジタル化し、高度な不変台帳に文化遺産を保存します。",
      },
      phase2: {
        title: "生成型適応ピボット",
        desc: "リアルタイムの塩分センサーによってトリガーされるAI駆動の再構築ブループリントと生成型ブランディング。瞬時の生産シフトを可能にします。",
      },
      phase3: {
        title: "ブロックチェーントラストブリッジ",
        desc: "「経済安全保障」と「信頼」を基盤に、日本の厳しい市場基準に対応するMRL（残留農薬基準）検証を徹底します。",
      },
    },
    showcase: {
      title: "フェニックスラベル",
      subtitle: "再生の象徴",
      hoverQr: "QRをスキャンして生存タイムラインを表示",
      timeline: {
        pre: "災害前：伝統的生産",
        pivot: "AIピボット：災害対応と適応",
        ready: "日本市場対応：MRL認証と輸出",
      }
    },
    synergy: {
      title: "シナジーとデータ回廊",
      mapDesc: "アンザンの農業の中心地と日本の産業の精密さを結ぶデジタルブリッジ。",
      stats: [
        { label: "デジタルマップ済みSME", value: "12,000+" },
        { label: "品質合格率", value: "98%" },
        { label: "平均ピボット時間", value: "3週間" },
      ]
    },
    leadership: {
      quote: "私たちは単に壊れたものを直すのではありません。AIと国境を越えた「信頼」を通じて、何が可能かを再設計するのです。",
      founder: "Tran Dang Thanh Phuong",
      role: "創設者 & Google Student Ambassador",
    }
  }
};
