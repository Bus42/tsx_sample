import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';

interface Prompt {
    id: string;
    text: string;
    last_used: string;
    prompt_start: string;
}

interface PromptContainerProps {
    data: Prompt[];
}

const promptStyle: React.CSSProperties = {
    background: '#0077aa',
    padding: '40px',
    borderRadius: '5px',
    color: '#fafafa',
    textAlign: 'center',
    margin: '1em',
    listStyleType: 'none',
    cursor: 'grab',
};

const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    padding: 0,
    margin: 0,
};

const getRenderItemStyle = (props: any, isDragged: boolean): React.CSSProperties => ({
    ...promptStyle,
    ...props.style,
    opacity: isDragged ? 0.8 : 1,
    transition: isDragged ? 'none' : 'transform 0.2s ease',
    cursor: isDragged ? 'grabbing' : 'grab',
});

const PromptContainer: React.FC<PromptContainerProps> = ({ data }) => {
    const [prompts, setPrompts] = useState(data);

    const handleOnChange = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
        setPrompts((prevPrompts) => arrayMove(prevPrompts, oldIndex, newIndex));
    };

    return (
        <List
            values={prompts}
            onChange={handleOnChange}
            renderList={({ children, props }) => (
                <ul {...props} style={listStyle}>
                    {children}
                </ul>
            )}
            renderItem={({ value, props, isDragged }) => (
                <li
                    {...props}
                    style={getRenderItemStyle(props, isDragged)}
                >
                    <p>{value.text}</p>
                </li>
            )}
        />
    );
};

export default PromptContainer;
