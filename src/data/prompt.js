export const StoryPrompt =
  "Please only respond with script. Create a 60-second script about a lesser-known but fascinating historical event. Include a surprising fact and explain its impact on modern society.Please only mention the story and nothing else.\n";
export const ImageGenPrompt =
  'Please respond with json only. Please analyze the following story JSON and create compelling, vivid image generation prompts for each scene. Follow these guidelines:\n\nFocus on the most visually striking elements of each scene.\nUse descriptive language that captures the mood, atmosphere, and key details.\nInclude relevant style descriptors (e.g., photorealistic, cinematic, animated, etc.) when appropriate.\nAvoid complex compositions or split screens; keep each prompt focused on a single, impactful image.\nIncorporate relevant color palettes or lighting conditions to enhance the visual appeal.\nWhen characters are involved, describe their appearance, expression, or action succinctly.\nPlease provide your response in the following JSON format:\n\n{ "storyToSceneMapping": [ { "index": 1, "words": "Four words from text", "ImageGeneratingDetailedPrompt": "Vivid, detailed image prompt" }, ... ] }\n\nAim to create image prompts that would result in visually stunning and emotionally engaging illustrations for each scene in the story.\n';
export const DefaultLLM = "claude-3-5-sonnet-20240620";
export const DefaultImageGenTool = "flux-schnell";
export const DefaultBgMusicURL =
  "https://cdn.pixabay.com/download/audio/2024/06/25/audio_7bfb8d2ab0.mp3";

export const ImageGenJSON = {
  storyToSceneMapping: [
    {
      index: 1,
      words: "sunset over mountains",
      ImageGeneratingDetailedPrompt:
        "A breathtaking sunset over majestic mountains with a vivid color palette of oranges, purples, and pinks. The sun dips below the peaks, casting a warm, golden glow across the rugged landscape. The sky is ablaze with dramatic clouds reflecting the sunset's hues, and the mountains are silhouetted against the colorful backdrop. The scene is rendered in a photorealistic style to emphasize the contrast between the glowing sky and the dark silhouettes of the mountains.",
    },
    {
      index: 2,
      words: "rainy city street",
      ImageGeneratingDetailedPrompt:
        "A cinematic view of a bustling city street during a heavy rainstorm. The wet pavement reflects neon lights from billboards and storefronts. People with umbrellas and raincoats hustle along the sidewalk while cars splash through puddles. The atmosphere is moody and vibrant, with bright city lights contrasting against the dark, wet pavement. Rendered in a cinematic style to capture the dynamic energy and reflective quality of the rainy urban environment.",
    },
    {
      index: 3,
      words: "forest clearing at dawn",
      ImageGeneratingDetailedPrompt:
        "A serene forest clearing bathed in the soft light of dawn. Tall, dew-covered grass and trees are highlighted by the first rays of sunlight piercing through the forest, creating a warm, golden glow. A light mist rises from the forest floor, enhancing the tranquil, magical atmosphere. The scene is depicted in a photorealistic style to capture the gentle interplay of light and shadow in the peaceful morning setting.",
    },
    {
      index: 4,
      words: "ancient castle ruins",
      ImageGeneratingDetailedPrompt:
        "Ancient castle ruins set against a dramatic sky, with weathered stones overgrown with vines. The sky is filled with dark, ominous clouds and shafts of sunlight breaking through, creating a contrast between the shadowed ruins and the illuminated areas. The scene is rendered in a cinematic style, emphasizing the historical grandeur and mysterious atmosphere of the ancient structure.",
    },
  ],
};

export const imageURL1 =
  "https://ideogram.ai/assets/progressive-image/balanced/response/I7biLRuBS4aouPCfDUVnuQ";

export const imageURL2 =
  "https://ideogram.ai/assets/progressive-image/balanced/response/_9PzO8v4QTWa-20-ruOezQ";

export const imageURL3 =
  "https://ideogram.ai/assets/progressive-image/balanced/response/8yXc_38IS5G2DgKCCLz9yg";

export const imageURL4 =
  "https://ideogram.ai/assets/progressive-image/balanced/response/_cKH4fzHQh2hKfvl9TXv9w";
// "https://firefly.adobe.com/public/t2i?id=urn%3Aaaid%3Asc%3AAP%3A308d8de9-1c57-4e4e-be1c-8de5d8bced36&ff_channel=shared_link&ff_source=Text2Image";
