import VoterReg from "../../src/components/VoterReg.vue";
import { mount } from "@vue/test-utils";
import { render } from "@testing-library/vue";
let legal =
  "By clicking Visit MYMOVE, you will leave USPS.com and redirect to MYMOVE.com. Once you leave, you will be subject to the MYMOVE Privacy Policy and Terms and Conditions.";
let handOff = "Visit MYMOVE";
let regCopy =
  "Are you ready for Election Day? Begin updating your voter registration with MYMOVE before it’s too late to participate in upcoming elections.";
let regHeading = "Register to vote at your new address";
let voteBadgeAltText = "A red, white, and blue badge that reads, 'VOTE'";
test("passes", () => {
  expect(true).toBe(true);
});
