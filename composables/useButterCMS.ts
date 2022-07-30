import butter from "buttercms";
import { ref } from "vue";

export default async function useButterCMS() {
  const config = await useRuntimeConfig();

  const ButterCMS = await butter(config.TOKEN);

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
