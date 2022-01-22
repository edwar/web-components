import { css } from "lit"

export default css`
    /** Init variables */
    :host {
        font-family: 'Nunito', sans-serif;
        --main-color-white: #fff;
        --main-color-red: #c70039;
        --main-color-red-dark: #ff0404;
        --main-color-dark: #666666;
        --main-principal-color: #2358b7;
        --main-color-dark-with-opacity: #a5a5a5;
    }
    /** Container */
    .container {
        box-sizing: border-box;
        width: 100%;
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: transparent;
        border-radius: 5px;
        margin-bottom: 10px;
        border: 1px solid var(--main-color-dark-with-opacity);
        padding-left: 5px;
    }
    .container.dark {
        border: 1px solid var(--main-color-white);
    }
    /** Error */
    .container #error {
        position: absolute;
        bottom: -17px;
        left: 5px;
        color: var(--main-color-red);
        font-size: .7rem;
    }
    .container.dark #error {
        color: var(--main-color-red-dark);
    }
    /** Input */
    .container input {
        border: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        font-size: .8rem;
        color: var(--main-color-dark);
        outline: none;
        line-height: .7rem;
        font-weight: lighter;
        margin-top: 2px;
    }
    .container.dark input {
        color: var(--main-color-white);
    }
    .container.dark label {
        color: var(--main-color-white);
    }
    /** Label */
    .container label {
        position: absolute;
        transform: translateY(0px);
        transition: 0.3s all ease;
        left: 5px;
        font-size: 1.1rem;
        color: var(--main-color-dark-with-opacity);
        pointer-events: none;
    }
    .container input:focus ~ label,
    .container input:not(:placeholder-shown):focus ~ label,
    .container input.is-not-empty:valid:not(:focus) ~ label,
    .container input:placeholder-shown:not(:focus) ~ label {
        transform: translateY(-10PX);
        font-size: .6rem;
        color: var(--main-principal-color);
    }
    .container.dark input:focus ~ label,
    .container.dark input:not(:placeholder-shown):focus ~ label,
    .container.dark input.is-not-empty:valid:not(:focus) ~ label,
    .container.dark input:placeholder-shown:not(:focus) ~ label {
        color: var(--main-color-white);
    }
    .container.dark input::placeholder {
        color: var(--main-color-dark-with-opacity);
    }
    /** Light mode */
    .container.light{
        box-shadow: 0 1px 1px rgba(0, 0, 0, .12), 0 1px 1px rgba(0, 0, 0, .24);
        transition: all .3s cubic-bezier(.25, 0.8, 0.25, 1);
        background-color: rgba(255, 255, 255, 0.25)
    }
    .container.light:hover{
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15), 0 3px 5px rgba(0, 0, 0, 0.12);
    }
    /** Dark mode */
    .container.dark {
        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.12), 0 1px 1px rgba(255, 255, 255, 0.24);
        transition: all .3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background-color: rgba(255, 255, 255, 0.25)
    }
    .container.dark:hover {
        box-shadow: 0 5px 10px rgba(255, 255, 255, 0.15), 0 3px 5px rgba(255, 255, 255, 0.12);
    }
`