import * as React from 'react';
import {List, arrayMove} from 'react-movable';

interface Prompt {
    id: number;
    text: string;
    last_used: string;
    prompt_start: string;
}

export interface IPromptContainerProps {
    data: Prompt[];
}

export interface IPromptContainerState {
    prompts: Prompt[];
}

export default class PromptContainer extends React.Component<IPromptContainerProps, IPromptContainerState> {
  constructor(props: IPromptContainerProps) {
    super(props);
    this.state = {
      prompts: this.props.data
    };
  }

  promptStyle: React.CSSProperties = {
    background: '#0077aa',
    padding: '40px',
    borderRadius: '5px',
    color: '#fafafa',
    textAlign: 'center',
    margin: '1em',
    listStyleType: 'none', // Remove list-style if using ul/li
    cursor: 'grab',        // Show a grab cursor initially
  };

  listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    padding: 0,
    margin: 0,
  };

  public render() {
    return (
      <List
        values={this.state.prompts}
        onChange={({ oldIndex, newIndex }) =>
          this.setState({
            prompts: arrayMove(this.state.prompts, oldIndex, newIndex),
          })
        }
        renderList={({ children, props }) => (
          <ul {...props} style={this.listStyle}>
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged }) => (
          <li
            {...props}
            style={{
              ...this.promptStyle,
              ...props.style, // Ensure provided styles (like transform) are applied
              opacity: isDragged ? 0.8 : 1, // Adjust visibility while dragging
              transition: isDragged ? 'none' : 'transform 0.2s ease', // Disable transition while dragging
              cursor: isDragged ? 'grabbing' : 'grab', // Change to 'grabbing' when dragged
            }}
          >
            {value.text}
          </li>
        )}
      />
    );
  }
}


