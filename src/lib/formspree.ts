export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkrwenn";

type FormspreeValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | string[]
  | Record<string, unknown>;

export async function submitToFormspree(
  fields: Record<string, FormspreeValue>,
  subject: string
) {
  const formData = new FormData();
  formData.append("_subject", subject);
  formData.append("_captcha", "false");

  if (typeof window !== "undefined") {
    formData.append("_next", window.location.href);
    formData.append("page_url", window.location.href);
  }

  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      formData.append(key, value.join(", "));
      return;
    }

    if (typeof value === "object") {
      formData.append(key, JSON.stringify(value, null, 2));
      return;
    }

    formData.append(key, String(value));
  });

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Formspree submission failed");
  }

  return response;
}

export async function sendTelegramLeadNotification(payload: Record<string, unknown>) {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn("Telegram notification failed");
    }
  } catch (error) {
    console.warn("Telegram notification failed:", error);
  }
}
