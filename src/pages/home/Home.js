import React from "react";
import { Heading1, Heading5, BodyText, TextContainer } from "../../shared/styled-components/Shared.styled";
import { HomeContainer, LandingMainButton } from "./Home.styled";

function Home() {

	return (
		<HomeContainer>
			<TextContainer>
				<Heading5>So you want to travel to</Heading5>
				<Heading1>Space</Heading1>
				<BodyText>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax
					because we’ll give you a truly out of this world experience!
				</BodyText>
			</TextContainer>
			<LandingMainButton to = 'destination'>Explore</LandingMainButton>
		</HomeContainer>
	);
}

export default Home;
