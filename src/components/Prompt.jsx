import { useState } from "react";
import "../styles/Prompt.css";
import {
  DefaultImageGenTool,
  DefaultLLM,
  ImageGenPrompt,
  StoryPrompt,
} from "../data/prompt";

const PromptForm = () => {
  const [channelName, setChannelName] = useState("History");
  const [storyPrompt, setStoryPrompt] = useState(StoryPrompt);
  const [imageGenPrompt, setImageGenPrompt] = useState(ImageGenPrompt);
  const [llm, setLLM] = useState(DefaultLLM);
  const [imageGenTool, setImageGenTool] = useState(DefaultImageGenTool);
  const [bgMusic, setBgMusic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log({
      channelName,
      storyPrompt,
      imageGenPrompt,
      llm,
      imageGenTool,
      bgMusic,
    });
  };

  return (
    <form className="prompt-form" onSubmit={handleSubmit}>
      <div>
        <label>Channel Name:</label>
        <select
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        >
          <option value="History">History</option>
          <option value="Motivation">Motivation</option>
        </select>
      </div>
      <div>
        <label>Story Prompt:</label>
        <textarea
          value={storyPrompt}
          onChange={(e) => setStoryPrompt(e.target.value)}
        />
      </div>
      <div>
        <label>Image Gen Prompt:</label>
        <textarea
          value={imageGenPrompt}
          onChange={(e) => setImageGenPrompt(e.target.value)}
        />
      </div>
      <div>
        <label>LLM:</label>
        <select value={llm} onChange={(e) => setLLM(e.target.value)}>
          <option value="claude-3-5-sonnet-20240620">
            claude-3-5-sonnet-20240620
          </option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Image Gen Tool:</label>
        <select
          value={imageGenTool}
          onChange={(e) => setImageGenTool(e.target.value)}
        >
          <option value="flux-schnell">flux-schnell</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Background Music URL:</label>
        <input
          type="text"
          value={bgMusic}
          onChange={(e) => setBgMusic(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PromptForm;
