<script>
  
</script>

<template>
  <nav>
    <div class="container relative flex justify-center">
      <img
        src="src/assets/navBarAssets/logo_web.svg"
        alt="logo"
        width="80"
        class="relative top-1"
      />
      <div class="flex items-center justify-center search">
        <div
          class="flex items-center justify-center bg-white rounded-[1.5rem] px-[0.75rem] ms-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
          >
            <path
              fill="#8d8d8d"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
            />
          </svg>
          <input
            type="text"
            class="p-1.5 text-gray-800 bg-white outline-none w-[855px] h-[3.5rem] rounded-[1.5rem] text-base font-desc"
            placeholder="Search"
          />
        </div>
        <img
          src="src/assets/navBarAssets/Bookmark.svg"
          alt="bookmark"
          class="p-10"
        />
        <button
          class="text-white bg-dark font-desc py-3 px-3 w-[170px] h-11 flex justify-center rounded-lg"
        >
          Log In
        </button>
      </div>
    </div>
  </nav>
</template>

<style></style>
