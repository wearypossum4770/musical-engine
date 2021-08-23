<template>
  <div id="amp-coac-vr" class="voter-reg">
    <img
      id="amp-coac-vr-img"
      :src="$options.voteBadgePNG"
      alt="A red, white, and blue badge that reads, 'VOTE'"
      class="voter-reg__image"
    />
    <div id="amp-coac-vr-copy-wrapper" class="voter-reg__copy-wrapper">
      <p id="amp-coac-vr-heading" class="voter-reg__heading">
        Register to vote at your new address
      </p>
      <p id="amp-coac-vr-copy" class="voter-reg__copy">
        Are you ready for Election Day? Begin updating your voter registration
        with MYMOVE before it’s too late to participate in upcoming elections.
      </p>
      <div class="voter-reg__actions">
        <button
          id="continue-coac-vr"
          type="button"
          class="c-btn"
          @click="$emit('handoff')"
        >
          Visit MYMOVE
        </button>
        <p id="amp-coac-vr-legal" class="voter-reg__legal">
          By clicking Visit MYMOVE, you will leave USPS.com and redirect to
          MYMOVE.com. Once you leave, you will be subject to the MYMOVE Privacy
          Policy and Terms and Conditions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import voteBadgePNG from "../assets/vote-badge.png";
export default {
  name: "VoterReg",
  voteBadgePNG,
};
</script>
<style scoped>
.voter-reg {
  @apply flex flex-col items-center p-4 bg-gray-100;

  @screen desktop {
    @apply py-6 px-8;
  }
}

.voter-reg__image {
  width: 150px;
  height: 150px;
}

.voter-reg__heading {
  @apply mt-2 font-bold text-blue-200;

  @screen desktop {
    @apply mt-3 text-2xl;
  }
}

.voter-reg__copy-wrapper {
  @apply w-full;
}

.voter-reg__copy {
  @apply mt-2 text-sm;

  @screen desktop {
    @apply text-base;
  }
}

.voter-reg__actions {
  @apply flex flex-col mt-6;
}

.voter-reg__legal {
  @apply mt-6 text-xs text-gray-500;
}
</style>
