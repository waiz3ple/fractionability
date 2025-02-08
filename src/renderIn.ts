export function renderIn(elementId: string, content: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content; // will be sanitized later
    }
}


// we should be less concern about how to attach to the dom