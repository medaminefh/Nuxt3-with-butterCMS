import butter from "buttercms";
import { ref } from "vue";

const ButterCMS = await butter("15fc42767d195a68240f761061242719c9b11635");

export default function useButterCMS() {
  async function getLandingPage() {
    const res = await ButterCMS.page.retrieve(
      "*",
      "simple-page-with-buttercms"
    );

    return ref(res.data.data);
  }

  return {
    getLandingPage,
  };
}
