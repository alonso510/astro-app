import"./hoisted.DD5on9Wr.js";const o=document.getElementById("contact-form"),e=document.getElementById("form-message");o&&e?o.addEventListener("submit",async r=>{r.preventDefault();try{const t=new FormData(o),s=await fetch("/api/submit-form",{method:"POST",body:t}),n=await s.json();if(s.ok)e.textContent="Form submitted successfully. Check the server console for the submitted data.",e.className="form-message success",o.reset();else throw new Error(n.message||"Error submitting form")}catch(t){t instanceof Error?e.textContent=t.message:e.textContent="An unknown error occurred",e.className="form-message error"}}):console.error("Form or message element not found");
