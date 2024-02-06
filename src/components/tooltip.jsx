export function ToolTip({ text,children }) {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    )
}