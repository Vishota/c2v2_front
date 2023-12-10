<template>
    <div class="button">
        <div class="text"><slot></slot></div>
    </div>
</template>

<style scoped>
.button {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    background-color: #54d277;
    border-radius: 10px;
    overflow: hidden;
    box-sizing: border-box;
}
.text {
    width: fit-content;
    margin-top: -1px;
    font-family: "Roboto", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 24px;
    white-space: nowrap;
    position: relative;
    letter-spacing: 0;
    line-height: normal;
}
</style>