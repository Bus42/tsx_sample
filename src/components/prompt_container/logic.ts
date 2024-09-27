import { SetStateAction } from "react";
import { Prompt } from "./interfaces";

// Import the necessary functions for console coloring and grouping
const logGroupCollapsed = (label: string, data: any) => {
    console.groupCollapsed(`%c${label}`, 'color: #2196F3; font-weight: bold;');
    console.table(data);
    console.groupEnd();
};

// Existing handleOnChange function with logging enhancements
export const handleOnChange = (prompts: Prompt[], oldIndex: number, newIndex: number, setPrompts: { (value: SetStateAction<Prompt[]>): void; (arg0: any[]): void; }) => {
    // Log drag-and-drop event details
    logGroupCollapsed('Drag Event', {
        'Old Index': oldIndex,
        'New Index': newIndex,
        'Dragged Prompt': prompts[oldIndex],
        'Target Prompt': prompts[newIndex] ? prompts[newIndex] : 'None (Moved to End)',
    });

    // Log the list of prompts before change
    console.groupCollapsed('%cBefore Change', 'color: #FF9800; font-weight: bold;');
    console.table(prompts);
    console.groupEnd();

    // Preserve the existing functionality of updating the list
    const updatedPrompts = [...prompts];
    const [movedPrompt] = updatedPrompts.splice(oldIndex, 1);
    updatedPrompts.splice(newIndex, 0, movedPrompt);

    // Log the updated list of prompts after the change
    console.groupCollapsed('%cAfter Change', 'color: #4CAF50; font-weight: bold;');
    console.table(updatedPrompts);
    console.groupEnd();

    // Apply the state change
    setPrompts(updatedPrompts);

    // Log final confirmation message
    console.log('%cUpdate Complete!', 'color: #9C27B0; font-weight: bold;');
};

// Generates the appropriate styles for an item during drag-and-drop interaction
export const getRenderItemStyle = (isDragged: boolean) => ({
    className: `prompt-item ${isDragged ? 'grabbing' : ''}`,
});