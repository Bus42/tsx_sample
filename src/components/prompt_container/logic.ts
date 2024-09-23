// logic.ts

import { arrayMove } from 'react-movable';
import { Prompt } from './interfaces';

// Handles moving the prompts based on their old and new index positions
export const handleOnChange = (
    prompts: Prompt[],
    oldIndex: number,
    newIndex: number,
    setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>
) => {
    setPrompts((prevPrompts) => arrayMove(prevPrompts, oldIndex, newIndex));
};

// Generates the appropriate styles for an item during drag-and-drop interaction
export const getRenderItemStyle = (isDragged: boolean) => ({
    className: `prompt-item ${isDragged ? 'grabbing' : ''}`,
});
