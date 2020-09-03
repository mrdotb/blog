---	
title: 5 years with VIM
date: "2020-09-03T12:37:19.357Z"
description: "It's been 5 years since I started to use vim, recap of my journey"
categories:
  - "vim"
---

## Contents

<div id="contents">

+ [Plugins](#plugins)
+ [Mappings](#mappings)
+ [Demo](#demo)

</div>

## Intro

It's been 5 years since I started to use [vim](https://www.vim.org/) and now [neovim](https://neovim.io/) as my goto text editor. Along The road I started to work on big projects. I tried many plugins and tinker my vimrc a lot. Today I fell very comfy. So I decided to share.

<div id="plugins">

## My must have plugins

+ [fzf](https://github.com/junegunn/fzf.vim) probably the most usefull plugin in my eyes. With this you can navigate painlessly around buffers, tabs, windows... So usefull for big project.
+ [vim-polyglot](https://github.com/sheerun/vim-polyglot) handle all the mainstream languages.
+ [vim-vinegar](https://github.com/tpope/vim-vinegar) I started with NERDtree before moving to netrw (vim default file explorer). This plugin make netrw better.
+ [vim-fugitive](https://github.com/tpope/vim-fugitive) Awesome wrapper for git inside vim.

</div>

<div id="mappings">

## Some mappings I use often.

+ ```vim
" open vimrc in a new tab to make some edit
nnoremap <leader>ev :tabnew $MYVIMRC<cr>
```

+ ```vim
" source vimrc
nnoremap <silent> <leader>sv :write<cr>:source $MYVIMRC<cr>:nohlsearch<cr>
```

+ ```vim
" Disable search result when pressing enter
nnoremap <silent><cr> :nohlsearch<cr>
```

</div>

<div id="demo">

## Project Workflow Demo

[![asciicast](https://asciinema.org/a/eNX2FRI8MPPSBF7nBk7WQUOSG.svg)](https://asciinema.org/a/eNX2FRI8MPPSBF7nBk7WQUOSG)

You can check my [dotfiles](https://github.com/mrdotb/dotfiles) to know more.

</div>
