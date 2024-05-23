import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Mental Health </PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Specifically addresses mental health related issues such as depression, anxiety, disorders, and others. </PricingCardFeature>
                  {/* <PricingCardFeature>$10,000 Budget</PricingCardFeature> */}
                  {/* <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Choose more</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Carrer</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Explore career paths, make carrer transition smoothly with the help of our mentors.  </PricingCardFeature>
                  {/* <PricingCardFeature>$50,000 Budget</PricingCardFeature> */}
                  {/* <PricingCardFeature>Lead Gen Analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Financial </PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Guidance and support for financial management, debt management, budgeting, financial planning.</PricingCardFeature>
                  {/* <PricingCardFeature>Unlimited Budget</PricingCardFeature> */}
                  {/* <PricingCardFeature>24/7 Support</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing