import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import {AuthorText} from "./styled";

function Author() {
    return (
        <Container>
            <Header title="O autorze" />
            <Section 
            title="Marek Aleksander Sendek"
            body={
                <>
                    <AuthorText>
                     Od 15 lat zajmuje się sprzedażą. 
                     Moje doświadczenie zawodowe obejmuje kilka branż w tym głównie nieruchomości i przemysł farmceutyczny       
                    </AuthorText>
                </>
            }>
            </Section>
        </Container>

    )
};

export default Author;