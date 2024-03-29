import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 10%;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 40px;
    }
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const Label = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #555;
    margin-bottom: 20px;
`

export const FilterRow = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;

        > div {
            width: 100%;
        }
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;

    div {
        margin-right: 20px; 
    }

    div div:last-child {
        margin-right: 0;
    }

    @media (max-width: 800px) {
        width: 100%;

        :last-child {
            margin-bottom: 20px;
        }
        
        select, input {
            width: 100%;
        }

        div {
            margin: 0;
            margin-bottom: 15px;
        }
    }
`

export const PostGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    margin-top: 120px;

    > a {
        margin: 10px 0;
        margin-right: 15px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        margin-top: 40px;


        > a {
            margin: 10px 0;
            width: 100%;
        }

        > a div h3 {
            width: 80%;
            font-size: 18px;
        }
    }
`

export const Clear = styled.button`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    background: #fff;
    border: 0;
    font-weight: 600;
    color: #555;
    padding: 8px 20px;
    padding-left: 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 20px;

    @media (max-width: 800px) {
        margin: 0;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 30px 0;

    @media (max-width: 800px) {
        justify-content: center;
    }
`

export const Info = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #555;
    margin-bottom: 20px;
`

export const LoadingWrapper = styled.div`
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`