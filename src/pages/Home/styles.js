import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

export const Input = styled.input`
    background-color: #6f6f6f;
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    margin: 1rem;
    color: white;
    border: none;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    &::placeholder {
        color: white;
    }
`;

export const RadioInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Radio = styled.input`
    margin-left: 1rem;
    background: #6f6f6f;

    width: 15px;
    height: 15px;
`;

export const RadioGroup = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
        color: white;
        margin-left: 10px;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Title = styled.h1`
    font-size: 15px;
    width: 100%;
    margin: 1rem 0;
    color: white;
    font-family: 'Montserrat', sans-serif;
`;

export const CalcButton = styled.button`
    background-color: #F07A16;
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    width: 100%;
    border: none;
    padding: 15px;
    border-radius: 5px;
    margin: 1rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        background-color: #A3642F;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ResultBox = styled.div`
    display: ${({ tmb }) => tmb > 0 ? 'block' : 'none'};
    background: #6f6f6f;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    
    * {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 15px;
        font-weight: normal;
    }
    
    p {
        margin: .5rem 0;
    }

    span {
        color: #F07A16;
    }
`;

export const Languages = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const LanguageSelector = styled.p`
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover{
        color: rgba(255, 255, 255, .5);
    }

    &+& {
        margin-left: 1rem;
    }
`;