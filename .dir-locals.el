;; deno project
((nil . ((lsp-enabled-clients . (deno-ls))
         (eval . (deno-fmt-mode))
         (eval . (remove-hook 'before-save-hook 'prettier-js 'local))
         )))
