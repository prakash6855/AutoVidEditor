export const StoryPrompt =
  "Please only respond with script. Create a 60-second script about a lesser-known but fascinating historical event. Include a surprising fact and explain its impact on modern society.Please only mention the story and nothing else.\n";
export const ImageGenPrompt =
  'Please respond with json only. Please analyze the following story JSON and create compelling, vivid image generation prompts for each scene. Follow these guidelines:\n\nFocus on the most visually striking elements of each scene.\nUse descriptive language that captures the mood, atmosphere, and key details.\nInclude relevant style descriptors (e.g., photorealistic, cinematic, animated, etc.) when appropriate.\nAvoid complex compositions or split screens; keep each prompt focused on a single, impactful image.\nIncorporate relevant color palettes or lighting conditions to enhance the visual appeal.\nWhen characters are involved, describe their appearance, expression, or action succinctly.\nPlease provide your response in the following JSON format:\n\n{ "storyToSceneMapping": [ { "index": 1, "words": "Four words from text", "ImageGeneratingDetailedPrompt": "Vivid, detailed image prompt" }, ... ] }\n\nAim to create image prompts that would result in visually stunning and emotionally engaging illustrations for each scene in the story.\n';
export const DefaultLLM = "claude-3-5-sonnet-20240620";
export const DefaultImageGenTool = "flux-schnell";