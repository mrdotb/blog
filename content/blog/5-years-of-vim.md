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

5 years ago was my first day using [vim](https://www.vim.org/). Things haven't changed much as I now use [neovim](https://neovim.io/) as my goto text editor. As soon as projects got bigger, I did start to experiment with numerous plugins and tinkered a lot with my vimrc. Today, as I feel pretty comfy, I decided to share this with you.

<div id="plugins">

## My must have plugins

+ [fzf](https://github.com/junegunn/fzf.vim) probably the most usefull plugin in my opinion. This plugin allow you to navigate painlessly around buffers, tabs, windows... It's so usefull for big project.
+ [vim-polyglot](https://github.com/sheerun/vim-polyglot) handle all the mainstream languages.
+ [vim-vinegar](https://github.com/tpope/vim-vinegar) I started with NERDtree before moving to netrw (vim default file explorer). This plugin makes netrw better.
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
