---
title: "AI Security Week: May 6, 2026"
description: "This week: OpenAI's updated usage policies, a novel multi-modal injection attack, the first formal AI security certification program announced in the EU, and the week's tracked CVEs."
pubDate: 2026-05-06
author: "AI Sec Digest Editorial"
tags: ["weekly-digest", "ai-security-news", "multimodal", "certification", "policy"]
category: "digest"
sources:
  - title: "OpenAI Usage Policies"
    url: "https://openai.com/policies/usage-policies"
  - title: "AI Security Alliance"
    url: "https://www.aissec.org/"
schema:
  type: "NewsArticle"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aisecdigest.com/ai-security-week-2026-05-06.png
heroAlt: "AI security digest May 6"
---

Weekly AI security digest.

## Policy

**OpenAI updated usage policies:** OpenAI published updated usage policies with expanded guidance on acceptable use of the API for security research. The update clarifies that "security research that could enable attacks on deployed AI systems" requires explicit prior approval through their researcher access program. The policies also expand the prohibited use list to include training data for models explicitly designed to evade safety classifiers — this targets the commercial "jailbreak model" market.

The security research exception process has historically been inconsistently applied; the updated documentation is clearer about what requires prior approval vs. what's covered under the general API terms.

**EU AI Security Certification:** The European Commission announced a public consultation on a voluntary certification scheme for AI security — analogous to Common Criteria for traditional software, but for AI-specific security properties. Proposed certification levels cover:
- Basic: documentation, transparency, incident response capability
- Substantial: independent security testing, monitoring requirements
- High: red-team evaluation, ongoing vulnerability tracking

The certification is voluntary and designed to support EU procurement requirements for AI systems in government and critical infrastructure. Public comment period is open for 60 days.

## Research

**Multi-modal prompt injection (image-embedded instructions):** Researchers at a European university published a paper demonstrating prompt injection via text embedded in images — instructions hidden in images that are visually indistinguishable from normal images but extracted by the vision model and treated as instructions.

The attack targets vision-language models (GPT-4V, Claude 3+ vision capabilities, Gemini Vision). The technique embeds instruction text in font sizes below human visual acuity but within the vision model's processing resolution. Defenses evaluated in the paper (output filtering, instruction detection) have significant coverage gaps against this variant.

This is a relevant development because many production deployments use VLMs to process user-submitted images (document understanding, image-based customer service). User-submitted images should be treated as potentially adversarial inputs.

**Federated learning poisoning at scale:** A paper from Google Research and academic collaborators describes federated learning poisoning attacks that can be mounted by a small fraction (<1%) of federated participants to degrade model safety properties — specifically RLHF-trained safety behaviors. The attack is designed to be undetectable by standard federated learning defenses (Byzantine-robust aggregation). The attack surface is primarily for federated fine-tuning setups; centrally-trained models aren't affected.

## CVEs This Week

**transformers library (CVE-2025-3892):** A model card parsing vulnerability allowing XML external entity (XXE) injection when loading model cards from untrusted sources. Models downloaded from Hugging Face with untrusted model cards could trigger SSRF. Fixed in transformers 4.41.2.

**mlflow (CVE-2025-4103):** Server-side request forgery via the artifact store path parameter in older mlflow configurations. Affects self-hosted mlflow deployments that accept user-supplied artifact store paths without validation. Fixed in mlflow 2.13.

**ONNX Runtime (CVE-2025-2891):** Memory corruption vulnerability in ONNX model loading, exploitable via maliciously crafted `.onnx` model files. Update to ONNX Runtime 1.18.0. High severity for deployments loading user-supplied model files; lower severity for controlled model sources.

Comprehensive tracking of ML library CVEs, including patch status and affected version ranges, at [mlcves.com](https://mlcves.com).

## Incident Tracking

**LLM-facilitated fraud in customer service:** Two additional incident reports this week describing similar patterns — LLM-based customer service tools that were manipulated via prompt injection in customer-submitted data to provide incorrect account information or waive fees that should not have been waived. The pattern is consistent with the financial institution incident reported last week.

The consistent pattern suggests systematic under-investment in input validation for LLM customer service deployments. Organizations using LLM tools for customer service should treat all customer-supplied content as potentially adversarial and apply injection detection to document uploads and long-form input fields.

---

*AI security tooling comparisons at [bestaisecuritytools.com](https://bestaisecuritytools.com). Weekly jailbreak research at [jailbreakdb.com](https://jailbreakdb.com).*

## See also

- [AI security alerts](https://ai-alert.org/)
- [AI incident tracker](https://aiincidents.org/)
