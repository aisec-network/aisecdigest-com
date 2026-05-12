---
title: "AI Security Week: May 5, 2026"
description: "This week: model unlearning research questions, a critical RAG pipeline vulnerability disclosure, new guidance from ENISA on AI incident response, and a roundup of this week's CVEs affecting ML infrastructure."
pubDate: 2026-05-05
author: "AI Sec Digest Editorial"
tags: ["weekly-digest", "ai-security-news", "cve", "rag-security", "model-unlearning"]
category: "digest"
sources:
  - title: "ENISA AI Security Guidelines"
    url: "https://www.enisa.europa.eu/topics/artificial-intelligence-cybersecurity"
  - title: "NVD CVE Database"
    url: "https://nvd.nist.gov/"
schema:
  type: "NewsArticle"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aisecdigest.com/ai-security-week-2026-05-05.png
heroAlt: "AI security digest May 5"
---

Weekly AI security digest. Primary sources.

## Research

**Model unlearning reliability challenged:** A paper published this week provides evidence that popular "machine unlearning" methods — techniques designed to remove specific training data from a model without full retraining — don't actually remove the information from the model's weights. Instead, they suppress the model's ability to surface the information in direct queries while leaving the underlying representations intact. The information can be recovered through indirect prompting or fine-tuning.

The implications for privacy compliance are significant: organizations relying on unlearning methods to satisfy GDPR right-to-erasure requests may not be compliant. Full retraining or model retirement may be the only technically verifiable erasure approach.

**Backdoor attacks via dataset poisoning:** A new study demonstrated backdoor attacks in instruction-following fine-tuned models via dataset poisoning. By injecting a small number of poisoned examples into an instruction-tuning dataset, attackers could cause a model to produce specific outputs when a trigger phrase appeared in the input — while maintaining normal behavior otherwise. The poisoning rate required was 0.1-0.5% of training examples, making it viable for large instruction-tuning datasets with multiple contributors.

Defensive implication: organizations using third-party instruction-tuning datasets should audit dataset provenance and consider trigger-phrase testing as part of post-training evaluation.

## Vulnerabilities

**RAG pipeline information [disclosure](https://ai-alert.org/) (critical):** A significant vulnerability disclosed this week affecting a specific vector database configuration — when authentication was disabled (common in development environments promoted to production without hardening), the database was accessible to the open internet. Combined with an LLM application that lacked output filtering, retrieved content from the vector database was being returned verbatim in LLM responses, including any sensitive information that had been indexed.

This is a configuration hygiene issue, not a software vulnerability, but it's been found in multiple production environments. Checklist:
- Vector databases should require authentication even in staging
- LLM applications should not pass retrieved context verbatim without filtering
- Internal document stores should never be indexable by the public internet

**llama.cpp integer overflow (CVE pending):** A buffer overflow in llama.cpp's quantization code, exploitable via maliciously crafted model files. If you're loading untrusted model files with llama.cpp, update to the latest version. Low risk for typical deployment scenarios (self-hosted model files from trusted sources); higher risk for any deployment that loads user-supplied model files.

**PyTorch deserialization (CVE-2025-XXXX):** A deserialization vulnerability in PyTorch's model loading code affecting `.pth` files loaded via `torch.load()` with untrusted inputs. The fix is to use `weights_only=True` parameter, which prevents execution of arbitrary code during deserialization. Teams loading models from untrusted sources should audit their loading code immediately.

## ENISA [AI Incident](https://aiincidents.org/) Response Guidance

The European Union Agency for Cybersecurity (ENISA) published updated guidance on AI-specific incident response this week. Key recommendations:

**Detection:** Establish baselines for LLM application behavior (typical response lengths, refusal rates, output categories). Anomalies from baseline are the primary detection signal for active attacks.

**Containment:** For suspected prompt injection or jailbreak incidents, the primary containment action is disabling or rate-limiting the affected endpoint while investigation proceeds.

**Evidence preservation:** AI incident response requires preserving the full context of affected interactions — input, retrieved context (for RAG applications), and output — not just the final response. Log retention policies should account for this.

**Post-incident analysis:** AI incidents often involve attack patterns that reveal detection gaps. The post-incident process should include evaluation of whether existing classifiers would catch the attack pattern and adding synthetic versions to the red-team test suite.

The full guidance is available on the ENISA website.

## Observed Attack Patterns This Week

A summary of attack patterns observed in community threat intelligence channels this week (not individually sourced; aggregated from multiple security researcher reports):

- Increased reports of "jailbreak-as-a-service" prompts being sold on underground forums — not new techniques, but commoditization of existing ones
- Attempts to elicit code generation that includes RCE payloads, targeting coding assistant deployments
- Social engineering attempts targeting AI company employees, attempting to access internal model evaluations

---

*CVE tracking for ML infrastructure at [mlcves.com](https://mlcves.com). AI defense tooling at [aidefense.dev](https://aidefense.dev).*
