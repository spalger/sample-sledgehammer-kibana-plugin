export default function (kibana) {
  return new kibana.Plugin({
    name: 'sledgehammers',
    uiExports: {
      sledgehammers: [
        'plugins/sledgehammers/smash'
      ]
    }
  });
};
