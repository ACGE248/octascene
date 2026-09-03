# OctaScene Provider & Model Candidate List (PMList)

> ## AI maintenance instructions
> This file is the canonical **Candidate List** for AI media providers, API platforms, generative media models, and AI direction/video-understanding models being evaluated for OctaScene.
>
> Whenever a user asks to **add a provider, platform, API, model, director model, or video-understanding model to the Candidate List / PMList**, the AI must update this file rather than creating a separate list.
>
> Maintenance rules:
> 1. **Deduplicate first.** If the provider/model already exists, update its row instead of adding another row.
> 2. **Research before populating free-tier fields** when current information is available. Prefer official pricing/docs. Free offers change frequently.
> 3. Every provider row must include: **Name, Category, Capabilities, Free Quota, Free Credit, Free Calls, One-Time Promo, Recurring Quota, Notes**.
> 4. Every generation model row must include: **Name, Model Owner/Origin, Category, Capabilities, Known Candidate Providers, Free/Open Notes**.
> 5. Every direction/reasoning/video-understanding row must include: **Name, Owner, Primary Role, Inputs, OctaScene Uses, Strengths, Notes**.
> 6. If a field is unavailable, unverified, not applicable, or no offer exists, write **`-`**. Never leave cells blank.
> 7. Clearly distinguish **recurring free quota** from **one-time signup/trial credit**.
> 8. Do not treat a rate limit (for example, requests/minute) as generation credit unless the provider explicitly includes free generation allowance.
> 9. Keep **provider/platform records separate from generation-model records and direction/reasoning records**. One model may be available from many providers; one provider may expose many models.
> 10. Update capability tags when known: **T2I** (text-to-image), **I2I** (image-to-image/edit), **I2V** (image-to-video), **T2V** (text-to-video), **Render** (non-generative renderer), **Inference** (general model inference).
> 11. Preserve the numbered `#` column and renumber rows sequentially after structural edits.
> 12. Add short source/verification notes in **Notes** when useful, especially for free-tier terms.
> 13. The purpose of this list is **candidate evaluation**, not a guarantee that a provider or model is production-ready or currently enabled in OctaScene.
>
> ### Free-tier field definitions
> - **Free Quota**: Generic free usage allowance when the provider states one but uses a unit other than calls/credits, or when the exact unit varies.
> - **Free Credit**: Monetary or provider-credit signup/monthly allowance (for example `$2 signup credit`, `80 credits`).
> - **Free Calls**: Explicit free API request/call count when verified.
> - **One-Time Promo**: Signup/trial-only promotion that does not automatically replenish.
> - **Recurring Quota**: Daily/monthly/periodic free allowance that replenishes automatically.
>
> ---
>
> ## Provider / Platform Candidates
>
> | # | Name | Category | Capabilities | Free Quota | Free Credit | Free Calls | One-Time Promo | Recurring Quota | Notes |
> |---:|---|---|---|---|---|---|---|---|---|
> | 1 | Sogni | Generation platform / API | T2I, I2V | - | Existing account credits | - | Account-dependent credits | - | Existing OctaScene testing candidate; useful for batch generation. |
> | 2 | Apiframe | Multi-model API aggregator | T2I, I2I, I2V, T2V | - | Trial/free credit availability varies | - | Yes / verify current amount | - | Strong real-API testing and aggregator candidate. |
> | 3 | JSON2Video | Video rendering API | Render | Free plan / verify current limits | - | - | - | Free tier / verify current limits | Storyboard/video renderer; not primarily a generative video provider. |
> | 4 | Hugging Face Inference Providers / Endpoints | Model hosting / inference platform | T2I, I2I, T2V, Inference | - | Small monthly Inference Providers credit; verify current amount | - | - | Monthly free allowance | Major open-model ecosystem; includes FLUX and open video models through supported providers. |
> | 5 | Cloudflare Workers AI | Serverless inference platform | T2I, I2I, Inference | 10,000 neurons/day (verify current pricing) | - | - | - | 10,000 neurons/day (verify) | Important recurring-free route for Black Forest Labs FLUX models. |
> | 6 | Runware | Multi-model generation API | T2I, I2I, I2V, T2V | - | $2 signup API credit (verify) | - | $2 signup credit (verify) | - | Large unified image/video model catalog. |
> | 7 | Replicate | Model hosting / inference platform | T2I, I2I, I2V, T2V, Inference | Select models may allow limited free testing | - | - | Model-dependent | - | Broad model ecosystem; free availability is model/account dependent. |
> | 8 | fal.ai | Model inference API platform | T2I, I2I, I2V, T2V, Inference | - | - | - | - | - | Major low-latency generative-media inference provider. |
> | 9 | PiAPI | Multi-model API aggregator | T2I, I2I, I2V, T2V | - | $0.50 signup credit (verify) | - | $0.50 signup credit (verify) | - | Affordable aggregator candidate. |
> | 10 | Kie.ai | Multi-model API aggregator | T2I, I2I, I2V, T2V | - | 80 testing credits (verified Sep 2026) | - | 80 signup/testing credits | - | French-localized site available; broad commercial model selection including Seedance, Kling, Veo and major image models. |
> | 11 | WaveSpeedAI | Multi-model generation API | T2I, I2I, I2V, T2V | - | $1 signup credit (verified Sep 2026) | - | $1 signup credit / no card reported | - | Strong low-cost candidate after trial; Wan 2.2 Ultra Fast advertised around $0.01/sec at verification. |
> | 12 | DeepInfra | Model inference platform | T2I, T2V, Inference | - | - | - | - | - | Affordable open-model hosting/API candidate. |
> | 13 | OpenRouter Video | Model routing / aggregation | T2V, I2V | - | - | - | - | - | Video-routing/API candidate; verify current supported media models. |
> | 14 | Together AI | Model inference platform | T2I, Inference | - | - | - | - | - | General inference candidate with generative image support. |
> | 15 | Black Forest Labs API | First-party model API | T2I, I2I | - | - | - | - | - | German-origin FLUX model owner; direct hosted API is generally paid. |
> | 16 | Runway | First-party video generation platform/API | I2V, T2V | - | - | - | Trial availability varies | - | Premium video-generation candidate. |
> | 17 | Luma AI / Dream Machine | First-party video generation platform/API | I2V, T2V | - | - | - | Trial availability varies | - | Major generative-video candidate. |
> | 18 | Pika | First-party media generation platform/API | I2V, T2V | - | - | - | Trial availability varies | - | Video-generation candidate. |
> | 19 | Kling AI | First-party video generation platform/API | I2V, T2V | Consumer app credits only; API free quota not verified | - | - | Platform credits may vary | - | Keep consumer free credits separate from API quota; API should be treated as paid unless verified otherwise. |
> | 20 | PixVerse | First-party video generation platform/API | I2V, T2V | Consumer/web free generations available; API free quota unverified | - | - | Platform free credits may vary | - | Web free tier should not be assumed to apply to developer API calls. |
> | 21 | Haiper AI | Video generation platform | I2V, T2V | - | - | - | - | - | Video-generation candidate; verify current API availability. |
> | 22 | Pollo AI | Multi-model media platform | T2I, I2V, T2V | - | - | - | Trial/free platform usage varies | - | Multi-model image/video candidate. |
> | 23 | DomoAI | Media generation platform | T2I, I2V, T2V | - | - | - | Trial/free usage varies | - | Candidate for stylized media generation. |
> | 24 | VEED.io | Video creation platform | T2V, Render | - | - | - | Free plan varies | - | Broader production platform; less direct fit for raw cinematic generation. |
> | 25 | Synthesia | AI video platform/API | T2V | - | - | - | Demo/trial availability varies | - | Avatar/presenter-focused; lower priority for cinematic documentary shots. |
> | 26 | Pixazo | Multi-model AI API platform | T2I, I2I, I2V, T2V | - | - | - | Free/trial availability varies | - | Explicitly selected previously for OctaScene candidate evaluation. |
> | 27 | Doitong | Multi-model API aggregator | T2I, I2I, I2V, T2V | Free API tier advertised; verify generation allowance | - | Up to 100 requests/day documented for some endpoints/models; verify scope | - | Daily free API limits advertised for some endpoints | German-language docs; FLUX, Wan, Hailuo and broader model catalog. |
> | 28 | deAPI.ai | Multi-model generation API | T2I, I2V, T2V | - | $5 signup credit (verify) | - | $5 signup credit (verify) | - | Strong candidate for meaningful I2V testing. |
> | 29 | Renderful | Multi-model generation API | T2I, I2I, I2V, T2V | - | $1 API credit (verify) | - | $1 signup credit / no card reported (verify) | - | German-localized UI/docs; broad image/video catalog. |
> | 30 | Runbase | Multi-model generation API | T2I, I2I, I2V, T2V | - | Free trial credits; amount unverified | - | Yes / amount unverified | - | German-localized platform; unified endpoint candidate. |
> | 31 | EvoLink.AI | Multi-model API aggregator | T2I, I2I, I2V, T2V | - | Free signup API credits; amount unverified | - | Yes / amount unverified | - | German-localized docs; broad commercial model catalog. |
> | 32 | Wireflow | AI workflow / media API platform | T2I, I2V, T2V | Limited monthly executions | - | - | - | Monthly free executions / verify count | Interesting because free usage is recurring rather than signup-only. |
> | 33 | Topview API | Multi-model AI API | T2I, I2V, T2V | Free REST API tier advertised; verify exact limits | - | - | - | Free tier advertised / exact quota unverified | Supports several major image/video model families. |
> | 34 | Banana 2 API | Image generation API | T2I, I2I | Free tier/start credits; verify | - | - | Start credits reported / verify | - | Image-focused fallback candidate. |
> | 35 | Magic Hour API | Media generation API | T2I, I2V, T2V | - | Free developer signup credits; amount unverified | - | Yes / amount unverified | - | Includes image-to-video API. |
> | 36 | Supermodel API | Multi-model generation API | T2I, I2V, T2V | - | 50 API credits (verify) | - | 50 signup/test credits (verify) | - | Multi-model API candidate. |
> | 37 | Emix.ai | Multi-model API aggregator | T2I, I2I, I2V, T2V | - | Free developer credits; amount unverified | - | Yes / amount unverified | - | Broad image/video aggregation candidate. |
> | 38 | Fluxpool.ai | Multi-model generation API | T2I, I2I, I2V, T2V | - | 50 free credits (verify) | - | 50 signup credits / no card reported (verify) | - | FLUX-oriented multi-model candidate. |
> | 39 | KlingAPI.com | Third-party Kling API | I2V, T2V | - | $1 signup credit (verify) | - | $1 signup credit / no card reported (verify) | - | Kling-focused third-party API route. |
> | 40 | PixelForge AI | Image generation API | T2I, I2I | Daily free image generations; exact count unverified | - | - | - | Recurring daily free generation / verify count | Swiss-built / German-language developer candidate. |
> | 41 | Alibaba Model Studio / Bailian | First-party model platform/API | T2I, I2I, I2V, T2V, Inference | Model-specific Beijing free quotas; includes free images and video seconds | - | - | Yes; many quotas are time-limited after activation | - | High-priority Chinese provider. Wan, Qwen Image and Z-Image families; free quotas vary by model and region. |
> | 42 | Volcengine Ark / 火山方舟 | First-party model platform/API | T2I, I2I, I2V, T2V, Inference | Seedream image quotas and Seedance token grants for eligible new accounts | - | - | Yes / onboarding resource packs | - | High-priority ByteDance provider; strong current free testing value. |
> | 43 | ModelScope / 魔搭 | Model hosting / inference platform | T2I, I2I, T2V, Inference | Up to 2,000 API-inference requests/day overall, commonly up to 200/model/day; verify current scope | - | - | - | Daily free inference quota | Strong recurring-free Chinese inference candidate; media model availability varies. |
> | 44 | SiliconFlow / 硅基流动 | Multi-model inference API platform | T2I, I2I, I2V, T2V, Inference | Select models are free; Kolors has been listed as free | Promotional coupon may be available after verification | - | Account/verification promos may apply | Select free models | Major Chinese aggregator/inference platform; useful OpenAI-compatible integration candidate. |
> | 45 | Tencent Cloud / TokenHub | First-party model platform/API | T2I, I2I, I2V, T2V, Inference | Hunyuan image models have one-time free resource packages; video free quota unverified | - | Hunyuan image packages include limited free generations | Yes / one-time resource package | - | Prefer TokenHub/newer Tencent media APIs over legacy integrations. |
> | 46 | ChinaAPI | Multi-model Chinese API gateway | T2I, I2I, I2V, T2V | - | $2 signup testing credit (verify current offer) | - | $2 signup credit | - | Unified gateway exposing multiple Chinese image/video families. |
> | 47 | Agnes AI Platform | Multi-modal API platform | T2I, I2I, I2V, T2V | Free/default tier documented with low execution limits; verify exact generation allowance | - | - | - | Free/default tier | Worth sandbox testing for unified image/video endpoints. |
> | 48 | HiDream | First-party/open image platform | T2I, I2I | Open-weight/self-host route; hosted free sandbox claim unverified | - | - | - | - | HiDream image models can be self-hosted; treat hosted API free status separately from open weights. |
> | 49 | Vidu | First-party video/image generation API | T2I, I2I, I2V, T2V | API promotional points may be available; exact free amount unverified | - | - | Account/profile completion promotions may vary | - | Strong fit for reference video, first/last-frame and storyboard consistency workflows. |
> | 50 | MiniMax / Hailuo | First-party media generation API | T2I, I2I, I2V, T2V | Standard API is paid; sandbox/free generation allowance not verified | - | - | Trial/promotional offers may vary | - | Excellent motion quality candidate; keep free API status distinct from free-account rate limits. |
> | 51 | PPIO | Multi-model inference/generation API | T2I, I2I, I2V, T2V, Inference | Free trial advertised; exact media allowance varies | Trial credits / amount verify | - | Yes / trial | - | Very low-cost Chinese inference aggregator; useful fallback for Wan, Kling, Hailuo, Qwen and Seedream routes. |
> | 52 | AI Ping | Multi-model Chinese API aggregator | T2I, I2I, I2V, T2V | - | ¥6 signup credit (verify current offer) | - | ¥6 signup credit | - | Aggregator candidate with Vidu, MiniMax/Hailuo, Seedream and other media models. |
> | 53 | Baidu Qianfan Platform / 千帆大模型平台 | First-party model marketplace/API | T2I, I2I, I2V, T2V, Inference | Media-generation free quota unverified | - | - | New-user model offers vary | - | Supports Baidu and third-party models; do not assume "free model" filters imply free media generation. |
> | 54 | OVHcloud AI Endpoints | French cloud / hosted inference API | T2I, Inference | Stable Diffusion XL endpoint listed free at Sep 2026 verification | - | - | - | Free hosted SDXL endpoint while current catalog pricing remains free | French provider with French docs; OpenAI-compatible image-generation route. High-priority recurring/free storyboard-image candidate. |
> | 55 | Novita AI | Multi-model generation / inference API | T2I, I2I, I2V, T2V, Inference | Sandbox program | $100 sandbox credits (verified Sep 2026) | - | $100 / 90-day sandbox; no card reported | - | French-localized site/docs; 200+ serverless models and strong full-workflow testing candidate across image and video. |
> | 56 | ModelsLab | Multi-model media generation API | T2I, I2I, I2V, T2V | - | Free signup credits; exact amount varies/verify | - | Signup testing credits | - | Broad media API catalog including Wan, Kling and Seedance families; useful low-cost I2V/T2V fallback candidate. |
>
> ---
>
> ## Model Candidates
>
> | # | Name | Model Owner / Origin | Category | Capabilities | Known Candidate Providers | Free / Open Notes |
> |---:|---|---|---|---|---|---|
> | 1 | FLUX.1 Schnell | Black Forest Labs / Germany | Image model | T2I | Cloudflare Workers AI, Hugging Face, Replicate, Runware, fal.ai, others | Apache-2.0/open weights; especially attractive for free/low-cost API routing. |
> | 2 | FLUX.1 Dev | Black Forest Labs / Germany | Image model | T2I, I2I | Hugging Face, fal.ai, Replicate, Runware, others | Open-weight/dev model; hosting/license terms must be checked per use case/provider. |
> | 3 | FLUX.2 Dev | Black Forest Labs / Germany | Image model | T2I, I2I | Cloudflare Workers AI and supported third-party hosts | Local/open availability plus third-party hosted access; first-party hosted status varies. |
> | 4 | FLUX.2 Klein 4B | Black Forest Labs / Germany | Image model | T2I, I2I | Cloudflare Workers AI and supported hosts | Useful smaller FLUX candidate for speed/cost evaluation. |
> | 5 | FLUX.2 Klein 9B | Black Forest Labs / Germany | Image model | T2I, I2I | Cloudflare Workers AI and supported hosts | Larger Klein variant; evaluate quality/speed tradeoff. |
> | 6 | Nano Banana | Google / global | Image model | T2I, I2I | Kie.ai, EvoLink.AI, Topview and other aggregators | Commercial-provider availability; free access depends on host. |
> | 7 | Banana 2 | Provider/model family to verify | Image model | T2I, I2I | Banana 2 API and possible aggregators | Verify canonical model owner/name before production mapping. |
> | 8 | Seedream | ByteDance / China | Image model | T2I, I2I | Kie.ai, EvoLink.AI, Doitong, Renderful, others | Free access depends on provider credits/quota. |
> | 9 | GPT Image | OpenAI / USA | Image model | T2I, I2I | Direct/OpenAI-compatible or aggregator routes where available | Paid model generally; aggregator free credits may offset testing cost. |
> | 10 | Qwen Image | Alibaba / China | Image model | T2I, I2I | Hugging Face/open-model hosts, aggregators | Open-model availability may enable low-cost/self-hosted routes. |
> | 11 | Krea Image models | Krea / global | Image model | T2I, I2I | Krea and supported aggregators | Verify exact model/version and API terms when adding production mapping. |
> | 12 | Wan 2.x | Alibaba / China | Video model family | I2V, T2V | Hugging Face, Doitong, fal.ai, Replicate, Runware, ModelsLab, others | Open-model family; strong candidate for free/self-hosted/low-cost routing. |
> | 13 | Wan 2.2 A14B | Alibaba / China | Video model | I2V, T2V | Hugging Face/open hosts, fal.ai, Replicate, Runware, ModelsLab, others | Open-model route candidate; verify exact host capabilities. |
> | 14 | Wan 2.6 | Alibaba / China | Video model | I2V, T2V | Third-party aggregators / hosts | Verify canonical release and provider support before production use. |
> | 15 | Wan 2.7 | Alibaba / China | Video model | I2V, T2V | Third-party aggregators / hosts | Verify canonical release and provider support before production use. |
> | 16 | Wan 3.0 | Alibaba / China | Video model | I2V, T2V | Third-party aggregators / hosts | Candidate/version name requires verification before production mapping. |
> | 17 | FastWan QAD 1.3B 480p | FastWan / open ecosystem | Video model | I2V, T2V | Open-model hosts / candidate inference platforms | Lightweight/speed-oriented Wan derivative; verify exact API hosts. |
> | 18 | FastWan 2.2 720p | FastWan / open ecosystem | Video model | I2V, T2V | Open-model hosts / candidate inference platforms | Speed-oriented Wan derivative; verify exact model identifier/host support. |
> | 19 | Kling | Kuaishou / China | Video model family | I2V, T2V | Kling AI, KlingAPI.com, Kie.ai, PiAPI, Doitong, Renderful, Runbase, EvoLink.AI, ModelsLab, others | Commercial model; aggregator signup credits may provide free testing. |
> | 20 | Seedance | ByteDance / China | Video model family | I2V, T2V | Kie.ai, Doitong, Renderful, Runbase, EvoLink.AI, Emix.ai, ModelsLab, others | Commercial/hosted model; free testing depends on provider. |
> | 21 | Hailuo / MiniMax Video | MiniMax / China | Video model family | I2V, T2V | MiniMax/Hailuo, Doitong, Renderful, Runbase, Supermodel, others | Commercial model; provider credits may allow free tests. |
> | 22 | Veo | Google / USA | Video model family | I2V, T2V | Google routes and supported aggregators such as Kie.ai, Doitong, Renderful, Runbase, EvoLink.AI, Topview | Premium commercial model; free access generally provider/promo dependent. |
> | 23 | Veo 3.1 Fast | Google / USA | Video model | I2V, T2V | Supported Google/aggregator routes | Faster/lower-cost Veo candidate where available; verify API/version naming. |
> | 24 | Veo 3.1 | Google / USA | Video model | I2V, T2V | Supported Google/aggregator routes | Premium Veo candidate; verify availability/pricing. |
> | 25 | LTX-Video | Lightricks / Israel | Video model | I2V, T2V | Hugging Face, Replicate, fal.ai and open-model hosts | Open-model ecosystem makes this relevant for low-cost/free inference. |
> | 26 | HunyuanVideo | Tencent / China | Video model | I2V, T2V | Hugging Face and open-model hosts | Open model; useful for self-hosted or free-provider evaluation. |
> | 27 | CogVideoX-5B | Zhipu AI / China | Video model | I2V, T2V | Hugging Face and open-model hosts | Open model; suitable for low-cost/free inference experiments. |
> | 28 | Mochi 1 | Genmo / USA | Video model | T2V | Hugging Face and open-model hosts | Open model; useful benchmark/candidate for free infrastructure. |
> | 29 | PixVerse 6 | PixVerse / China | Video model | I2V, T2V | PixVerse and supported aggregators | Commercial video model; verify current version/API host availability. |
> | 30 | Pruna p-video | Pruna AI / Europe | Video model | I2V, T2V | Open/inference hosts where supported | Speed/efficiency-oriented candidate; verify canonical versions/hosts. |
> | 31 | Luma / Dream Machine models | Luma AI / USA | Video model family | I2V, T2V | Luma AI, Supermodel and supported aggregators | Commercial model family. |
> | 32 | Pika models | Pika / USA | Video model family | I2V, T2V | Pika and supported aggregators | Commercial model family. |
> | 33 | Stable Video | Stability AI / UK/global | Video model family | I2V | Hugging Face/open hosts, Supermodel and others | Open/open-weight variants may allow low-cost inference. |
> | 34 | Sora | OpenAI / USA | Video model family | I2V, T2V | OpenAI and supported aggregators where legitimately available | Premium/commercial; verify official API availability and third-party legitimacy before production integration. |
>
> ---
>
> ## Direction / Reasoning / Video Understanding Candidates
>
> These models and services are candidates for OctaScene's **AI Director layer**. They do not need to generate the final media themselves. Their role is to understand the project, narration, script, references, visual continuity, pacing, story function, and production constraints, then plan or critique shots and route work to the appropriate generation/search/rendering tools.
>
> | # | Name | Owner | Primary Role | Inputs | OctaScene Uses | Strengths | Notes |
> |---:|---|---|---|---|---|---|---|
> | 1 | GPT-5.6 Sol | OpenAI | Master Director / planning reasoning | Script, narration transcript/timing, images, project metadata, Direction Bible, reference-analysis output | Narrative analysis, shot planning, visual strategy, model/tool routing, continuity decisions, Direction Bible, shot-spec generation, regeneration decisions | Strong complex reasoning, structured planning, large-context project reasoning | Candidate primary Master Director. Keep generation-provider selection separate from the director model. |
> | 2 | Claude Opus 5 | Anthropic | Creative Director / long-form story reasoning | Script, narration, project documents, extracted reference frames/analysis | Theme, emotional arc, narrative structure, direction rules, shot grammar, long-form creative critique | Strong long-form writing/reasoning and creative structure | Candidate alternative/ensemble Master Director; native video-analysis workflow may require preprocessing/extracted frames. |
> | 3 | Claude Sonnet 5 | Anthropic | Cost-efficient Director / planner | Script, narration, project metadata, extracted visual context | High-volume shot planning, revisions, Direction Bible application, production assistance | Cost/speed-oriented alternative to Opus-class reasoning | Candidate everyday director where full Opus reasoning is unnecessary. |
> | 4 | Gemini long-context video models | Google | Reference Video Analyzer / Shot Critic | Native video, audio, transcript, images, text | Analyze reference films/channels, pacing, cut rhythm, shot types, camera movement, visual-to-narration relationship, generated-video QA | Native multimodal/video understanding and long-context analysis | High-priority reference-video analyzer. Track current production model/version separately because Gemini model names change frequently. |
> | 5 | Qwen3-VL Thinking | Alibaba / Qwen | Low-cost multimodal Director / Shot Critic | Video, images, text, script, project metadata | Video/image understanding, visual QA, spatial reasoning, continuity checking, batch shot scoring | Strong multimodal reasoning with open/hosted ecosystem options | Attractive for high-volume/low-cost critique and secondary director tasks. Verify exact checkpoint/provider before integration. |
> | 6 | TwelveLabs Pegasus | TwelveLabs | Specialized video understanding / segmentation | Video + audio + prompts | Timestamped scene analysis, custom segment detection, editorial grammar extraction, reference-profile construction | Purpose-built video understanding and configurable segment analysis | Strong candidate for extracting shot grammar from reference videos rather than serving as the master reasoning model. |
> | 7 | TwelveLabs Marengo | TwelveLabs | Multimodal retrieval / reference search | Video, audio, images, text/documents | Semantic shot/reference retrieval, finding visual analogues, building searchable reference libraries, concept-to-footage matching | Multimodal embeddings/search specialized for video retrieval | Useful future layer for a large direction/reference library and archive search. |
> | 8 | LTX Studio / LTX ecosystem | Lightricks | Product/workflow reference + previsualization | Concept, script, storyboard inputs | Benchmark script-to-storyboard, shot framing, camera direction, character consistency and timeline workflow | Closest current product reference to parts of OctaScene's AI-directing workflow | Treat primarily as competitor/workflow reference; LTX-Video remains separately listed as a generation model. |
>
> ### Proposed AI Director responsibilities
>
> The OctaScene Director should reason over more than prompts. Candidate responsibilities include:
>
> - script and narration understanding
> - project/video category and audience intent
> - narrative beat/function classification
> - emotional arc and information-density planning
> - shot purpose and shot-type selection
> - visual novelty and repetition avoidance
> - camera framing, angle, movement and composition
> - narration-to-visual relationship
> - maps, archive, document, graphics and generated-media routing
> - character/location/era continuity
> - reference-video grammar extraction
> - Direction Bible creation and enforcement
> - duration, pacing and pattern-interrupt planning
> - preferred generation capability selection before choosing a provider/model
> - generated-shot critique and regeneration decisions
> - timeline-level coverage/gap analysis
>
> ### Candidate narrative-function taxonomy
>
> Each narration/scene block can be classified into a narrative function so visual direction follows meaning rather than only keywords:
>
> `HOOK`, `SETUP`, `CONTEXT`, `QUESTION`, `REVEAL`, `EVIDENCE`, `EXPLANATION`, `PROCESS`, `ESCALATION`, `CONTRAST`, `CONSEQUENCE`, `EMOTIONAL_BEAT`, `TRANSITION`, `RESOLUTION`, `CALLBACK`.
>
> Example routing logic:
>
> - **EVIDENCE** → prefer archive, documents, maps, photographs, newspapers, diagrams or factual graphics when available.
> - **EMOTIONAL_BEAT** → prefer restrained composition, longer duration, lower information density and slower movement.
> - **EXPLANATION / PROCESS** → prefer diagrams, maps, staged visual sequences and process shots.
> - **TRANSITION** → prefer establishing shots, geography, passage-of-time visuals or environmental B-roll.
>
> ### Direction Profile / reference-video analysis targets
>
> Reference-video analysis should be able to produce reusable **Direction Profiles** containing metrics/rules such as:
>
> - average and median shot duration
> - cuts per minute
> - shot-type distribution
> - archive/document/map/graphics/reconstruction/B-roll percentages
> - wide/medium/close framing distribution
> - static vs moving-camera distribution
> - push-in/pan/handheld/other camera movement frequency
> - pattern-interrupt interval
> - major visual-transition interval
> - hook duration and chapter structure
> - music/sound intensity by narrative function
> - narration-to-visual relationship
> - repeated visual motifs
> - reveal and escalation grammar
>
> OctaScene should learn **production grammar rather than copy individual visuals**.
>
> ---
>
> ## Capability Categories
>
> | # | Code | Category | Meaning |
> |---:|---|---|---|
> | 1 | T2I | Text-to-Image | Generate a still image from a text prompt. |
> | 2 | I2I | Image-to-Image / Image Editing | Transform, edit, restyle, extend, or condition generation on an input image. |
> | 3 | I2V | Image-to-Video | Generate video using one or more input images/frames. |
> | 4 | T2V | Text-to-Video | Generate video directly from a text prompt. |
> | 5 | Render | Video / Storyboard Rendering | Assemble/render media without necessarily performing generative image/video synthesis. |
> | 6 | Inference | General Model Inference | Host/run models through a general inference API or serverless runtime. |
>
> ---
>
> ## OctaScene usage intent
>
> PMList is a **research and integration candidate registry**. OctaScene should keep providers, generation models, and direction/reasoning models as distinct concepts. Providers and generation models should use a many-to-many provider-model capability mapping. The Director layer should reason about the project and first select the required **capability and creative intent**, then allow the model/provider selection layer to rank compatible connected options by quality, speed, cost, free-tier availability, continuity requirements and shot constraints.

The Director should be able to choose non-generation routes as well. For example, if a shot is factual evidence, it may route to archive/document/map retrieval rather than creating synthetic B-roll.