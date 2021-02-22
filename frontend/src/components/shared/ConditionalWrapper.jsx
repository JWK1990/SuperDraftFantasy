/* Use to place elements within a Wrapper Div conditionally. */
/* For example used to decide whether to add wrapping divs for TeamViews. */
export const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;
