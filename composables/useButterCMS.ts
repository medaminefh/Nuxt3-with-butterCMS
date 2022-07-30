import butter from "buttercms";
import { ref } from "vue";

// something wrong with using this useRuntimeConfig (i've done some research and found that i can't use this outside a <script setup> or something, and i can't export it when i declare it in <script setup>)
const config = useRuntimeConfig();

const ButterCMS = await butter(config.TOKEN);

export default function useButterCMS() {
  async function getLandingPage() {
    const res = await ButterCMS.page.retrieve(
      "*",
      "landing-page-with-components"
    );

    return ref(res.data.data);
  }

  return {
    getLandingPage,
  };
}
