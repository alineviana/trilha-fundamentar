// Throw

function sayMyName(name = '') {
  if (name === '') {
    throw new Error("Nome é obrigatório");
  }

  console.log("Depois do erro...");
}

// Try ... catch

try {
  sayMyName();
} catch (e) {
  console.log(e);
}
