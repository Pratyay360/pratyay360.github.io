# #!/usr/bin/env bash

# set -e

# default_page_path="_default/page.smd"
# default_section_path="_default/section.smd"
# default_page_layout="page.shtml"
# default_section_layout="section.shtml"

# _prompt() {
#     local prompt="$1"
#     local default="${2:-}"
#     local val
#     if [ -n "${default}" ]; then
#         printf '\033[1;36m%s\033[0m \033[2m[%s]\033[0m ' "${prompt}" "${default}" >&2
#     else
#         printf '\033[1;36m%s\033[0m ' "${prompt}" >&2
#     fi
#     read -r val
#     if [ -z "${val}" ] && [ -n "${default}" ]; then
#         echo "${default}"
#     else
#         echo "${val}"
#     fi
# }

# _select() {
#     local prompt="$1"
#     shift
#     local options=("$@")
#     local count=${#options[@]}
#     printf '\n\033[1;36m%s\033[0m\n' "${prompt}" >&2
#     for ((i = 0; i < count; i++)); do
#         printf '  \033[1;33m%s)\033[0m %s\n' "$((i + 1))" "${options[$i]}" >&2
#     done
#     printf '\n' >&2
#     while true; do
#         printf '\033[1;36mChoose [1-%s]:\033[0m ' "${count}" >&2
#         read -r choice
#         if [[ "${choice}" =~ ^[0-9]+$ ]] && [ "${choice}" -ge 1 ] && [ "${choice}" -le "${count}" ]; then
#             echo "${options[$((choice - 1))]}"
#             return
#         fi
#         printf '\033[1;31mInvalid choice.\033[0m\n' >&2
#     done
# }

# _to_title() {
#     echo "$1" |
#         sed "s/-/ /g" |
#         awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1'
# }

# # @cmd Create a new page or section.
# # @arg path The content file path (e.g. blog/post.smd or blog/index.smd).
# # @option -l --layout The layout name (without .shtml extension).
# # @option -t --title The page/section title.
# # @option -T --tags Space-separated tags.
# new() {
#     local kind="page"
#     local date
#     date=$(date --rfc-3339="seconds" | sed "s/ /T/g")

#     local layout="${argc_layout:-}"
#     local path="${argc_path:-}"
#     local title="${argc_title:-}"
#     local tags="${argc_tags:-}"
#     local interactive=0

#     if [ -z "${path}" ]; then
#         interactive=1
#         path=$(_prompt "Content path?" "")
#         if [ -z "${path}" ]; then
#             printf '\033[1;31mPath is required.\033[0m\n' >&2
#             exit 1
#         fi
#     fi

#     local basename_no_ext
#     basename_no_ext=$(basename "${path}" | cut -d '.' -f 1)
#     if [ "${basename_no_ext}" == "index" ]; then
#         kind="section"
#     fi

#     local default_title
#     if [ "${kind}" == "section" ]; then
#         default_title=$(_to_title "$(basename "$(dirname "${path}")")")
#     else
#         default_title=$(_to_title "$(basename -s .smd "${path}")")
#     fi

#     if [ "${interactive}" -eq 1 ] || [ -z "${title}" ] && [ "${interactive}" -eq 0 ]; then
#         title=$(_prompt "Title?" "${default_title}")
#         if [ -z "${title}" ]; then
#             title="${default_title}"
#         fi
#     fi

#     local -a page_layouts=("page.shtml" "post.shtml" "links.shtml")
#     local -a section_layouts=("section.shtml" "section-links.shtml")
#     local -a layouts=()
#     if [ "${kind}" == "page" ]; then
#         layouts=("${page_layouts[@]}")
#     else
#         layouts=("${section_layouts[@]}")
#     fi

#     if [ "${interactive}" -eq 1 ] || [ -z "${layout}" ] && [ "${interactive}" -eq 0 ]; then
#         if [ "${#layouts[@]}" -gt 1 ]; then
#             layout=$(_select "Layout?" "${layouts[@]}")
#         else
#             layout="${layouts[0]}"
#         fi
#     fi

#     if [ -z "${tags}" ]; then
#         tags=$(_prompt "Tags? (space-separated, empty to skip)" "")
#     fi

#     printf '\n' >&2
#     printf '  \033[2mpath:   %s\033[0m\n' "${path}" >&2
#     printf '  \033[2mtitle:  %s\033[0m\n' "${title}" >&2
#     printf '  \033[2mlayout: %s\033[0m\n' "${layout}" >&2
#     if [ -n "${tags}" ]; then
#         printf '  \033[2mtags:   %s\033[0m\n' "${tags}" >&2
#     fi
#     printf '\n' >&2
#     confirm=$(_prompt "Create?" "Y")
#     if [ "${confirm}" != "Y" ] && [ "${confirm}" != "y" ]; then
#         printf '\033[1;33mAborted.\033[0m\n' >&2
#         exit 0
#     fi

#     local new_dir_path
#     new_dir_path=$(dirname "${path}")
#     if [ ! -d "${new_dir_path}" ]; then
#         mkdir -p "${new_dir_path}"
#         echo "Parent directory generated: ${new_dir_path}"

#         local check_dir="${path}"
#         while true; do
#             check_dir="$(dirname "${check_dir}")"

#             if [ "${check_dir}" == "content" ]; then
#                 break
#             fi

#             local auto_section_page_path="${check_dir}/index.smd"
#             if [ ! -f "${auto_section_page_path}" ] && [ "${kind}" == "page" ]; then
#                 cp "${default_section_path}" "${auto_section_page_path}"
#                 echo "Parent section generated: ${auto_section_page_path}"

#                 local section_title
#                 section_title=$(_to_title "$(basename "${check_dir}")")

#                 sed -i -e "s/TITLE/${section_title}/g" "${auto_section_page_path}"
#                 sed -i -e "s/DATE/${date}/g" "${auto_section_page_path}"
#                 sed -i -e "s/LAYOUT/${default_section_layout}/g" "${auto_section_page_path}"
#             fi
#         done
#     fi

#     if [ "${kind}" == "page" ]; then
#         cp "${default_page_path}" "${path}"
#         echo "Page generated: ${path}"
#     elif [ "${kind}" == "section" ]; then
#         cp "${default_section_path}" "${path}"
#         echo "Section generated: ${path}"
#     fi

#     sed -i -e "s/TITLE/${title}/g" "${path}"
#     sed -i -e "s/DATE/${date}/g" "${path}"
#     sed -i -e "s/LAYOUT/${layout}/g" "${path}"

#     if [ -n "${tags}" ]; then
#         IFS=" " read -ra splitTags <<<"${tags}"
#         printf -v delimitedTags "\"%s\", " "${splitTags[@]}"
#         sed -i -e "s/TAGS/ ${delimitedTags}/g" "${path}"
#     else
#         sed -i -e "s/TAGS//g" "${path}"
#     fi
# }

# # @cmd Install mise.
# install() {
#     curl https://mise.run | sh
# }

# # @cmd Update project.
# update() {
#     flow
# }

# # See more details at https://github.com/sigoden/argc
# eval "$(argc --argc-eval "$0" "$@")"
