import { Deta } from "deta";
import type { APIRoute } from "astro";
import suite from "@/utils/suite";

const errors = { name: "", email: "", message: "" };

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const data = {
    name: form.get("name")?.toString(),
    email: form.get("email")?.toString(),
    message: form.get("message")?.toString(),
    _gotcha: form.get("_gotcha")?.toString(),
  }
  const validationResult = suite(data);
  if (validationResult.isValid()) {
    const deta = Deta();
    const db = deta.Base("contact_form");
    await db.put({ name: data.name, email: data.email, message: data.message });
    suite.reset(); 
    return redirect("/thank-you");
  } else {
    if (validationResult.hasErrors("name")) {
      errors.name += validationResult.getErrors("name")[0];
    }
    
    if (validationResult.hasErrors("email")) {
      errors.email += validationResult.getErrors("email")[0];
    }

    if (validationResult.hasErrors("message")) {
      errors.message += validationResult.getErrors("message")[0];
    }
    
    suite.reset();
    return new Response(JSON.stringify({
      message: "Missing required fields.",
    }),
    { status: 400 });
  }
}