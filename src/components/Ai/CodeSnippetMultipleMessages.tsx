import React from "react";
import TabItem from "@theme/TabItem";
import { AdornedTabs } from "../Tabs/AdornedTabs";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlockString from "@site/src/theme/CodeBlock/Content/String";

const codeSnippets: Record<string, string> = {
  motoko: `import LLM "mo:llm";

  await LLM.chat(#Llama3_1_8B, [
    {
      role = #system_;
      content = "You are a helpful assistant.";
    },
    {
      role = #user;
      content = "How big is the sun?";
    }
  ]);
  `,
  rust: `use ic_llm::{Model, ChatMessage, Role};

  ic_llm::chat(
  Model::Llama3_1_8B,
  vec![
      ChatMessage {
          role: Role::System,
          content: "You are a helpful assistant".to_string(),
      },
      ChatMessage {
          role: Role::User,
          content: "How big is the sun?".to_string(),
      },
  ],
  )
  .await;
  `,
};

const customStyles = {
  tab: {
    color: "rgb(82, 88, 96)",
  },
};

export function CodeSnippetMultipleMessages() {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-5 ">
        <motion.div
          initial={false}
          className="rounded-md"
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={
            {
              "--ifm-tabs-color": customStyles.tab.color,
            } as React.CSSProperties
          }
        >
          <AdornedTabs>
            <TabItem value="motoko" label="Motoko" default>
              <CodeBlockString
                language="motoko"
                className="text-left"
                showLineNumbers={true}
              >
                {codeSnippets.motoko}
              </CodeBlockString>
            </TabItem>
            <TabItem value="rust" label="Rust">
              <div style={{ width: "100%", maxWidth: "none" }}>
                <CodeBlockString
                  language="rust"
                  className="text-left"
                  showLineNumbers={true}
                >
                  {codeSnippets.rust}
                </CodeBlockString>
              </div>
            </TabItem>
          </AdornedTabs>
        </motion.div>
      </div>
    </div>
  );
}
