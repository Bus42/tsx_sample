import React, { useState } from 'react';
import { List } from 'react-movable';
import './prompt_container.css';
import { PromptContainerProps } from './interfaces';
import { handleOnChange, getRenderItemStyle } from './logic.ts'; // Importing logic from logic.ts

const PromptContainer: React.FC<PromptContainerProps> = ({ data }) => {
    const [prompts, setPrompts] = useState(data);

    return (
        <List
            values={prompts}
            onChange={({ oldIndex, newIndex }) =>
                handleOnChange(prompts, oldIndex, newIndex, setPrompts)
            }
            renderList={({ children, props }) => (
                <ul {...props} className="prompt-container">
                    {children}
                </ul>
            )}
            renderItem={({ value, props, isDragged }) => (
                <li
                    {...props}
                    className={getRenderItemStyle(isDragged).className}
                >
                    <p>{value.text}</p>
                </li>
            )}
        />
    );
};

export default PromptContainer;
