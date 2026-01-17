export class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getAttribute('color');

        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.backgroundColor = color;
        ball.textContent = number;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                --ball-text-color: white;
            }
            .ball {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                font-weight: bold;
                color: var(--ball-text-color);
                text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                box-shadow: inset -5px -5px 10px rgba(0,0,0,0.3), 
                            inset 5px 5px 10px rgba(255,255,255,0.3);
            }
        `;
        
        this.shadowRoot.innerHTML = ''; // Clear previous content
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(ball);
    }
}
