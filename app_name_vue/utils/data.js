// utils/data.js
import { useCustomFetch } from "@/composables/customFetch";

export async function getSample() {
  return useCustomFetch("/api/v0/sample");
}
