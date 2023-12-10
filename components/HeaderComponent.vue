<template>
    <WidthWrapper style="height: 100px;">
        <div class="header-content">
            <To to="/">
                <LogoBigComponent />
            </To>
            <HeaderMenu />
            <HeaderAuthComponent />
        </div>
    </WidthWrapper>
</template>
<style scoped>
.frame {
    user-select: none;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 20px
}
</style>