// Add a property to the global object. You can do this by adding top-level declarations using declare keyword to your env.d.ts file.

// declare var myString: string;
// declare function myFunction(): boolean;

// This will provide typing to globalThis.myString and globalThis.myFunction, as well as window.myString and window.myFunction.
// Note that window is only available in client-side code. globalThis is available both server-side and client-side, but its server-side value won’t be shared with the client.
// If you only want to type a property on the window object, provide a Window interface instead:

// Reference: https://docs.astro.build/en/guides/typescript/


interface ImportMetaEnv {
    readonly DB_PASSWORD: string;
    readonly PUBLIC_POKEAPI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Reference: https://docs.astro.build/en/guides/environment-variables/
