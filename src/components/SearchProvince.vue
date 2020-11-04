<template>
  <div class="input-container">
    <div class="shadow pt-5 px-5 bg-white rounded input-body">
      <div class="pb-4 d-flex">
        <button class="dropdown">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-search dropdown-icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fill-rule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
        </button>
        <input type="text" class="w-100 p-1 pl-2 input-province" />
      </div>
      <div class="pb-5 d-flex">
        <button class="dropdown">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-search dropdown-icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fill-rule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
        </button>
        <input type="text" class="w-100 p-1 pl-2 input-province" />
      </div>
    </div>
    <button class="btn-submit-province py-1">ค้นหา</button>
  </div>
</template>

<style scoped>
.input-province {
  border: 1px solid #ced4da;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  outline: 0;
}

.input-body {
  margin-bottom: -1rem;
}

.dropdown {
  border: 1px solid #ced4da;
  border-right: none;
  background: #ffffff;
  width: 2rem;
  border-radius: 10px 0px 0px 10px;
}

.dropdown:focus {
  outline: 0;
}

.dropdown-icon {
  color: #ced4da;
}

.btn-submit-province {
  border: none;
  background: #25ced1;
  color: #ffffff;
  width: 50%;
  border-radius: 20px;
  font-weight: 900;
  font-size: 1.1rem;
}
</style>
