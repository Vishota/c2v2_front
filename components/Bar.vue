<template>
    <div
        style="align-items: center; border-radius: 10px; background-color: #eee; width: 100%; display: flex; flex-direction: row; justify-content: flex-start; padding: 20px; box-sizing: border-box; gap: 20px; cursor: pointer; text-align: left; font-size: 36px; color: #000; font-family: Roboto;">
        <div style="flex: 1;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;">
            <div style="position: relative; ">
                <slot></slot>
            </div>
        </div>
        <img style="position: relative;border-radius: 10px;width: 64px;height: 64px;overflow: hidden;flex-shrink: 0;cursor: pointer;"
            alt="" src="/go.svg?url" id="go" />
    </div>
</template>