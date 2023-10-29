import {
  HeaderBrandContainer,
  HeaderBrandElement,
  HeaderBrandImage,
} from "../../Header.styles";

const HeaderBrand = () => {
  return (
    <HeaderBrandContainer>
      <HeaderBrandElement to="/">
        <HeaderBrandImage src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"></HeaderBrandImage>
      </HeaderBrandElement>
    </HeaderBrandContainer>
  );
};

export default HeaderBrand;
