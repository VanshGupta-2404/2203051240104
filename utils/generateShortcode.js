let nanoid;

(async () => {
  const { customAlphabet } = await import('nanoid');
  nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
})();

module.exports = () => nanoid();
