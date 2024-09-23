// interfaces.ts

export interface Prompt {
    id: string;
    text: string;
    last_used: string;
    prompt_start: string;
}

export interface PromptContainerProps {
    data: Prompt[];
}
