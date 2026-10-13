<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared club navigation, footer and the initial-arrival contact dialog in the root ClubShell so every public page has the same contact access.
- Keep brochure facts, asset pointers and leaf metadata helpers in the browser-safe club module to avoid inconsistent public content.
- Store public contact enquiries through a validated server function; only the server service role can access enquiry rows, keeping visitor details private.
- Use semantic global CSS tokens and the existing Button component for the editorial club design and its controls.
- Reuse the original brochure logo through the shared club asset module in every brand placement, keeping the club identity consistent.
