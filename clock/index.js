

export default function (kibana) {
  return new kibana.Plugin({
    name: 'clock',
    uiExports: {
      visTypes:['plugins/clock/clock']
    }
  });
}
