Deno.core.opSync("op_set_exit_code", 42);
Deno.exit(0); // Takes precedence.
